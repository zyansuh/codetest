function solution(babbling) {
    // 발음할 수 있는 단어들을 정규 표현식으로 정의
    const validSound = /^(?!.*(aya.*aya|ye.*ye|woo.*woo|ma.*ma))(aya|ye|woo|ma)+$/;
    
    // 조건에 맞는 발음의 개수를 세기
    let count = 0;
    
    // babbling 배열의 각 문자열을 확인
    for (const word of babbling) {
        if (validSound.test(word)) {
            count++;
        }
    }
    
    return count;
}