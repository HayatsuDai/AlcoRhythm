<template>
    <div>
        <header id="header" class="header">
            <nav class="header-color">
                <div class="container">
                    <a class="item">カスタムヘッダー</a>
                </div>
            </nav>
        </header>
        <slot />
    </div>
</template>

<style scoped>
.header-color {
    background-color: #a59e55;
}
.container {
    display: flex;
    color: #ffffff;
    font-weight: bold;
}
.container .item {
    padding: 20px 10px;
}
.container > div:last-of-type {
    margin-left: auto;
}
</style>