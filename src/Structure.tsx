interface PostContent {
	userName: string;
	avatar: string;
	postDate: string;
	title: string;
	content: string;
	numLikes: number;
	numComments: number;
	tags: string[];
}

interface TrendyContent {
	userName: string;
	title: string;
	avatar: string;
	content: string;
	tags: string[];
}

export type { PostContent, TrendyContent };
