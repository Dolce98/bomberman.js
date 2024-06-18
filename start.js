kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1]
});

loadSprite('backgroundImage', 'sprites/backgroundImage.png');

scene('start', () => {
    layers(['bg', 'obj', 'ui'], 'obj');
    add([
        sprite('backgroundImage'),
        layer('bg'),
        pos(0, 0),
        scale(width()/984 , height()/556)
    ]);

    add([
        text('Bomberman', 32),
        origin('right'),
        pos(width() / 2, height() / 2 - 50)
    ]);

    add([
        text('Press Space to Play', 16),
        origin('right'),
        pos(width() / 2, height() / 2)
    ]);

    keyPress('space', () => {
        go('game', { level: 0, score: 0 });
    });

    add([
        text('Press 1, 2 or 3 to chose the mapa', 10),
        origin('right'),
        pos(width() / 2, height() / 2+50)
    ]);
    keyPress('1', () => {
        go('game', { level: 0, score: 0 });
    });
    keyPress('2', () => {
        go('game', { level: 1, score: 0 });
    });
    keyPress('3', () => {
        go('game', { level: 2, score: 0 });
    });

    add([
        text('Created by:', 10
        ),
        origin('right'),
        pos(width() / 2, height() / 2+100)
    ]);
    add([
        text('Fernando Dolce, Pedro Santos e Pedro Barraqui', 10
        ),
        origin('right'),
        pos(width() / 2, height() / 2+120)
    ]);
});

go('start');
