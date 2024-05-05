<template>
    <header id="header" class="header">
        <nav class="header-color">
            <div class="container">
                <a class="item">デフォルトヘッダー</a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.header-color {
    background-color: #CC9900;
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