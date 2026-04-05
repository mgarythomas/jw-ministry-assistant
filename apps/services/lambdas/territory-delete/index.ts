import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/territory-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const territoryId = event.pathParameters?.territoryId;
    if (!territoryId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing territoryId' }) };
    }
    await prisma.territory.delete({ where: { id: territoryId } });
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
