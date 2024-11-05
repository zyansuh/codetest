function solution(x) {
    // x의 자릿수 합을 구하기 위해 숫자를 문자열로 변환 후 각 자릿수를 더함
    const sumOfDigits = String(x)
        .split('')  // 각 자리 숫자를 분리
        .map(Number) // 문자로 된 각 자릿수를 숫자로 변환
        .reduce((acc, cur) => acc + cur, 0); // 각 자릿수를 더함

    // x가 자릿수 합으로 나누어지는지 확인
    return x % sumOfDigits === 0;
}
