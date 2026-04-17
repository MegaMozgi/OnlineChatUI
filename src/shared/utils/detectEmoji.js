export const detectEmoji = (text) => {
    const ranges = [
        '\ud83e\udd23',
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
        ' ',
    ].join('|');

    const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');
    const isOnlyEmojis = str => !removeEmoji(str).length;

    if (isOnlyEmojis(text)) {
        return true;
    }

    return false;
}