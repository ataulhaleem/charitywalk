// This is your serverless function route handler
import { sql } from "@vercel/postgres";
export async function POST(request) {
    // Parse the incoming request body as JSON
    const requestBody = await request.json();
  
    // Extract the username and password from the request body
    const { email, password } = requestBody;
    try{
        var authenticated = await validateUser(email, password);
        return new Response(JSON.stringify({ authenticated : authenticated }), {
            headers: { 'Content-Type': 'application/json' },
          });
      
    }catch (err){
        console.error(err)
    }
    // Perform any necessary authentication or processing here
    // For demonstration purposes, let's just return the received data
  }
  

  async function validateUser(email, passwd) {
  try {
    var user_data = await sql`SELECT * FROM users`;
    console.log(user_data)
    const isUserValid = user_data.rows.find(user => user.user_id === email);
    const isPasswordValid = user_data.rows.find(user => user.jamaat_id === parseInt(passwd));
    if (isUserValid && isPasswordValid) {
      // User found, return true
      return true;
    } else {
      // User not found, return false
      return false;
    }
  } catch (e) {
    if (e.message.includes('relation "users" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      );
      // Table is not created yet
      startTime = Date.now();
      user_data = await sql`SELECT * FROM users`;
    } else {
      throw e;
    }
  }
}