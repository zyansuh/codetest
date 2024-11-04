function solution(n) {
    const sqrt = Math.sqrt(n); // n의 제곱근을 구함
    if (Number.isInteger(sqrt)) { // 제곱근이 정수인지 확인
        return Math.pow(sqrt + 1, 2); // x + 1의 제곱을 반환
    } else {
        return -1; // 정수가 아니면 -1 반환
    }
}
