const { blogTeam } = require('./blogTeam');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function generateBlogPost(topic) {
  console.log(`Generating blog post about "${topic}"...`);
  console.log('Status: RUNNING');

  try {
    const output = await blogTeam.start({ topic });
    if (output.status === 'FINISHED') {
      console.log('\nGenerated Blog Post:');
      console.log(output.result);

      const { costDetails, llmUsageStats, duration } = output.stats;
      console.log('\nStats:');
      console.log(`Duration: ${duration} ms`);
      console.log(`Total Token Count: ${llmUsageStats.inputTokens + llmUsageStats.outputTokens}`);
      console.log(`Total Cost: $${costDetails.totalCost.toFixed(4)}`);
    } else if (output.status === 'BLOCKED') {
      console.log('Workflow is blocked, unable to complete');
    }
  } catch (error) {
    console.error('Error generating blog post:', error);
  }

  rl.question('\nEnter another topic (or "quit" to exit): ', handleInput);
}

function handleInput(input) {
  if (input.toLowerCase() === 'quit') {
    rl.close();
    return;
  }
  generateBlogPost(input);
}

console.log('Welcome to the AI News Blogging Team!');
rl.question('Enter a topic to generate a blog post (e.g. "AI News Sep, 2024"): ', handleInput);

rl.on('close', () => {
  console.log('Thank you for using the AI News Blogging Team. Goodbye!');
  process.exit(0);
});