import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import Topic from "../../../../models/topic";

export async function PUT(request, { params }) {
  // Get dynamic [topicId] from url path
  const { topicId } = params;

  // Destructure object with new object names and assign the database property as new object value
  const { newTitle: title, newDescription: description } = await request.json();

  // Connect to database
  await connectMongoDB();

  // Find Id and update the property values
  await Topic.findByIdAndUpdate(topicId, { title, description });

  // Return response
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  // Get dynamic [topicId] from url path
  const { topicId } = params;

  // Connect to Database
  await connectMongoDB();

  // Find _id from database equal to dynamic [topicId]
  const topic = await Topic.findOne({ _id: topicId });

  // Return the json object with defined [topicId]
  return NextResponse.json({ topic }, { status: 200 });
}
