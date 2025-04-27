function createCounterII(n: number): () => number {
    return function Counter() {
        return n++
    }

}