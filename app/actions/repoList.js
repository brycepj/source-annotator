export const DOWNLOAD_REPO = 'DOWNLOAD_REPO';

export function downloadRepo(inputUrl) {
  return {
    type: DOWNLOAD_REPO,
    url: inputUrl,
  };
}

