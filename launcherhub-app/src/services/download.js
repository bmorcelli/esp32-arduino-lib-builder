import * as FileSystem from 'expo-file-system';

export async function downloadFile(url) {
  const fileUri = FileSystem.documentDirectory + url.split('/').pop();
  const result = await FileSystem.downloadAsync(url, fileUri);
  return result.uri;
}
