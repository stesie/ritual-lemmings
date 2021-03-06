(function() {
  'use strict';

  function Preload() {
    this.progressBar = null;
    this.ready = false;
  }

  Preload.prototype = {
    preload: function () {
      var cx = (this.game.width / 2);
      var cy = (this.game.height / 2);

      this.progressBar = this.add.sprite(cx, cy, 'progressBar');
      this.progressBar.position.x = this.progressBar.position.x -this.progressBar.width/2;
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.progressBar);

      this.load.image('level', 'assets/level.png');
      this.load.image('rock', 'assets/rock.png');
      this.load.image('tree1', 'assets/tree1.png');
      this.load.image('tree2', 'assets/tree2.png');
      this.load.image('lake', 'assets/lake.png');
      this.load.image('chili', 'assets/chili.png');
      this.load.spritesheet('player_body', 'assets/player.png', 120, 120);
      this.load.spritesheet('player_mask', 'assets/player_mask.png', 120, 120);

      this.load.image('bg_back', 'assets/bg_back.png');
      this.load.image('bg_front', 'assets/bg_front.png');
      this.load.image('sky', 'assets/sky.png');

      this.load.image('title', 'assets/title.png');
      this.load.image('end', 'assets/end.png');
      this.load.image('pow', 'assets/pow.png');
      this.load.image('end_anim', 'assets/end_anim.gif');

      this.game.load.audio('music', 'assets/music.wav');
      this.game.load.audio('chili_sound', 'assets/chili1.wav');
      this.game.load.audio('jump_sound', 'assets/jump.wav');
      this.game.load.audio('impact1', 'assets/impact1.wav');
      this.game.load.audio('impact2', 'assets/impact2.wav');
      this.game.load.audio('end_jump_sound', 'assets/jump.mp3');
    },

    create: function () {

    },

    update: function () {
      if (this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  module.exports = Preload;

}());
