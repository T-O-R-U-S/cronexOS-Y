import { windows } from './stores';

// Function factory.
export function createWindow(title, content) {
	return () => {
		windows.update((apps) => [
			...apps,
			{
				title,
				content
			}
		]);
	};
}
