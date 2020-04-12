function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

useCallback(function callback(sentence) {
  console.log(sentence);
})

modules.export = {useCallback}

