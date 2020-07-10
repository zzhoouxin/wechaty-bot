/**
 * 判断是否是周末
 */
function judgeIsJob() {
    let isJob = true;
    const today = new Date().getDay();
    if(today === 0 || today === 6 ){
        isJob = false;
    }
    return isJob
}

module.exports = {
    judgeIsJob
};
