function createCounter(n: number): () => number {
    return function Counter() {
        return n++
    }

}