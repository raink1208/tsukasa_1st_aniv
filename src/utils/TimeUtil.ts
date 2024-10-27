export const toHMSTime = (totalSeconds: number) => {
  const hour = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hour}時間${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
}
