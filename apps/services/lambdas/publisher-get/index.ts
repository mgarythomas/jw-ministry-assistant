import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/publisher-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const publisherId = event.pathParameters?.publisherId;
    if (!publisherId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing publisherId' }) };
    }
    const publisher = await prisma.publisher.findUnique({ where: { id: publisherId } });
    if (!publisher) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Publisher not found' }) };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(publisher),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
