class Boss extends Opponent{

    constructor(game) {
        super(game);

        this.speed = BOSS_SPEED;

        this.myImage.src = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
    }

}