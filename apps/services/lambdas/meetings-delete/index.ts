import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/meetings-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const meetingId = event.pathParameters?.meetingId;
    if (!meetingId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing meetingId' }) };
    }
    await prisma.meeting.delete({ where: { id: meetingId } });
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
