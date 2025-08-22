export async function performOTA(deviceIp, fileUri) {
  // Stage 1: upload firmware
  const upload = await fetch(`http://${deviceIp}/upload`, {
    method: 'POST',
    body: await fetch(fileUri).then(r => r.blob()),
  });
  if (!upload.ok) {
    throw new Error('Upload failed');
  }
  // Stage 2: finalize update
  const apply = await fetch(`http://${deviceIp}/apply`, { method: 'POST' });
  if (!apply.ok) {
    throw new Error('Finalize failed');
  }
  return true;
}
