import "dotenv/config";

function createApikey() {
  if (process.env.API_KEY_RAPID) {
    return process.env.API_KEY_RAPID;
	}
}

export const rapidKey = createApikey();