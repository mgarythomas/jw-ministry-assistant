import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/territory-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing request body' }) };
    }
    const data = JSON.parse(event.body);
    const territory = await prisma.territory.create({ data });
    return {
      statusCode: 201,
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
