const mask = 2;
if (value) {
  const start = String(value).slice(0, mask * -1) || '0';
  const end = String(value).slice(mask * -1);
  
  const res = Number([start, end].join('.'));
  
  value = res.toLocaleString(undefined, {
    minimumFractionDigits: mask,
    maximumFractionDigits: mask,
  });
}
