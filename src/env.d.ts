/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SUPABASE_API_KEY: string;
	readonly VITE_QUOTE_BASE_URL: string;
	readonly VITE_COMMENT_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
