import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/territory-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const territoryId = event.pathParameters?.territoryId;
    if (!territoryId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing territoryId' }) };
    }
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing request body' }) };
    }
    const data = JSON.parse(event.body);
    const assignment = await prisma.territoryAssignment.create({
      data: {
        territoryId,
        publisherId: data.publisherId,
      }
    });
    return {
      statusCode: 201,
      body: JSON.stringify(assignment),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
