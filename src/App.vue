<template>
    <div class="" id="app">

        <div class="container">
            <div class="squares__alert">
                <div class="alert alert-primary" role="alert">
                    {{ textMessage }}
                </div>
            </div>

            <button
                v-show="isGameOver"
                type="button"
                class="btn btn-primary"
                @click="generator"
            >Начать игру</button>

            <div v-show="!isGameOver" class="squares__action">
                <button
                    v-for="(btn, i) in defaultBtn"
                    :key="btn"
                    type="button"
                    class="btn btn-outline-primary me-3 js-btn"
                    @click="onClick(i)"
                >Primary</button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'App',

    data() {
        return {
            defaultBtn: 4,
            generate: [],
            clickMap: [],
            delayTime: 1500,
            round: 1,
            maxRound: 3,
            isClick: false,
            click: 1,
            message: ['Первый раунд', 'Второй раунд', 'Третий раунд'],
            isGameOver:  true,
            isWin: true,
        };
    },

    computed: {
        textMessage() {
            return !this.isWin ? 'Вы проиграли' :
                !this.isClick  ? 'Подготовка к раунду' :this.message[this.round - 1];
        },
    },

    methods: {

        addButtonColor(elem, duration) {
            return new Promise( resolve => {
                setTimeout(async () => {
                    elem.classList.remove('btn-outline-primary');
                    elem.classList.add('btn-danger');
                    resolve();
                }, duration);
            });
        },

        changeButtonColor(elem, iterator, duration) {
            return new Promise(resolve => {
                setTimeout(async () => {
                    for (let i = 0; i < this.generate[iterator]; i++ ) {
                        await this.addButtonColor(elem, duration);
                        setTimeout(async () => {
                            elem.classList.remove('btn-danger');
                            elem.classList.add('btn-outline-primary');
                        }, 200);
                    }
                    resolve();
                }, duration);
            });
        },

        async generator() {
            this.isWin = true;
            this.isGameOver = false;
            this.isClick = false;
            this.generate = [];
            this.click = 1;
            this.clickMap = [];
            const btn = this.$el.querySelectorAll('.js-btn');
            let iterator = 0;

            for (let i = 1; i < (this.defaultBtn + 1); i++) {
                this.generate.push(this.random(i));
            }

            for await ( let elem of btn ) {
                await this.changeButtonColor(elem, iterator, this.delayTime);
                iterator++;
            }
            this.isClick = true;
        },

        changeLevel() {
            return new Promise(resolve => {
                if (this.round < this.maxRound) {
                    this.defaultBtn++;
                    this.delayTime = this.delayTime - 500;
                    this.round++;
                } else {
                    this.gameOver();
                }
                resolve();
            });
        },

        gameOver(isWin = true) {
            this.isWin = isWin;
            console.log('игра закончена');
            this.defaultBtn = 4;
            this.delayTime = 1500;
            this.round = 1;
            this.isGameOver = true;
            this.isClick = false;
        },

        random(max) {
            let min = 1;
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        },

        async onClick(i) {
            if (this.isClick) {

                // если следующая кнопка была правильно нажата
                if (!this.clickMap[i]) {
                    if (this.clickMap[i -1]) {
                        if (this.clickMap[i -1] !== this.generate[i -1]) {
                            console.log('Конец хода, предыдущий шаг небыла заполненна полностью');
                            this.gameOver(false);
                        }
                    }
                    this.click = 1;
                }

                this.clickMap[i] = this.click;

                this.clickMap = this.clickMap.slice();

                // неразрешаем нажимать не в очереди
                if (this.clickMap.includes(undefined)) {
                    console.log('Конец хода, перепрыгнули через шаг');
                    this.gameOver(false);
                }

                if (this.click > this.generate[i]) {
                    console.log('Конец хода, значение шага выше чем количество мерцаний');
                    this.gameOver(false);
                }

                if ( this.generate.length !== this.clickMap.length) {
                    this.click++;
                } else {
                    if (this.generate[this.generate.length -1] !== this.clickMap[this.clickMap.length -1]) {
                        this.click++;
                    } else {
                        console.log('Следующий раунд');
                        await this.changeLevel();
                        await this.generator();
                    }
                }
            }
        },
    },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
