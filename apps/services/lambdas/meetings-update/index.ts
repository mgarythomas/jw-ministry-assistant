import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/meetings-client';

const prisma = new PrismaClient();

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const meetingId = event.pathParameters?.meetingId;
    if (!meetingId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing meetingId' }) };
    }
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing request body' }) };
    }
    const data = JSON.parse(event.body);
    const meeting = await prisma.meeting.update({ where: { id: meetingId }, data });
    return {
      statusCode: 200,
      body: JSON.stringify(meeting),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
