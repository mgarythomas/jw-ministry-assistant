import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/publisher-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const publisherId = event.pathParameters?.publisherId;
    if (!publisherId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing publisherId' }) };
    }
    await prisma.publisher.delete({ where: { id: publisherId } });
    return {
      statusCode: 204,
      body: '',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
