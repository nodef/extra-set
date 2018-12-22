function addArray(set, arr, bgn=0, end=arr.length) {
  bgn = bgn<0? arr.length+bgn:bgn;
  end = end<0? arr.length+end:end;
  end = end>arr.length? arr.length:end;
  for(var i=bgn; i<end; i++)
    set.add(arr[i]);
  return set;
};
module.exports = addArray;
