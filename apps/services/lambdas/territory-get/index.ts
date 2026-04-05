import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/territory-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const territoryId = event.pathParameters?.territoryId;
    if (!territoryId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing territoryId' }) };
    }
    const territory = await prisma.territory.findUnique({ where: { id: territoryId } });
    if (!territory) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Territory not found' }) };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(territory),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
