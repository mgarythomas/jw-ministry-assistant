import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/publisher-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const publisherId = event.pathParameters?.publisherId;
    if (!publisherId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing publisherId' }) };
    }
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing request body' }) };
    }
    const data = JSON.parse(event.body);
    const publisher = await prisma.publisher.update({ where: { id: publisherId }, data });
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
