var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["57bf0e0a-1349-4c51-afe0-ddec0458ff02","e0b7505d-d4a2-4fd2-954f-725ec16bfd42","d1e59d91-6100-4c51-80fd-0ed260dfbb1f","bad23a34-0f93-4910-82d6-5a63633012d1","4cac083e-0806-4912-8b94-94afa4fe3992","b439894e-777b-4395-985b-7a97cd7fae2c","f5967617-2644-4404-8bb7-e790764719bf","b6c27c88-701d-44b6-8019-1e2d26ed53f8","9674a946-79d8-45e8-bf2d-7f25da7ef2b7","02c1817f-b183-4ab6-be69-2cc77e0980bf","bd3b4d94-a34f-478a-992d-c464c1e8382c","29432fa5-bd2d-4608-8d8f-a11236428ffa","c8a5333e-2922-4324-b104-fda5e0c3cb4c","07212802-0860-4351-91eb-165285777ee7","d2f8c35b-19ed-478a-a37e-3ed6887b0813","70a5ce72-9fc3-4545-a6de-8ffd4591a172"],"propsByKey":{"57bf0e0a-1349-4c51-afe0-ddec0458ff02":{"name":"sprPlayerDown","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"cYDTF0UJ_p5zbrrU9uVIIMgGzUkQNT0j","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":160},"rootRelativePath":"assets/57bf0e0a-1349-4c51-afe0-ddec0458ff02.png"},"e0b7505d-d4a2-4fd2-954f-725ec16bfd42":{"name":"sprPlayerDownStill","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"O4bVcRluHIw3lE3ZGOMpGTXyUR6Inpka","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":80},"rootRelativePath":"assets/e0b7505d-d4a2-4fd2-954f-725ec16bfd42.png"},"d1e59d91-6100-4c51-80fd-0ed260dfbb1f":{"name":"sprPlayerLeftStill","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":1,"looping":true,"frameDelay":15,"version":"UOSqVrRpzNXGME1cTYtY7Ms1xFgGE_.C","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":80},"rootRelativePath":"assets/d1e59d91-6100-4c51-80fd-0ed260dfbb1f.png"},"bad23a34-0f93-4910-82d6-5a63633012d1":{"name":"sprPlayerRight","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":6,"looping":true,"frameDelay":10,"version":"UA1zgFC3Wkw4cLqekc87bF8jhhDsySlr","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":160},"rootRelativePath":"assets/bad23a34-0f93-4910-82d6-5a63633012d1.png"},"4cac083e-0806-4912-8b94-94afa4fe3992":{"name":"sprPlayerLeft","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":6,"looping":true,"frameDelay":10,"version":"3gVyAfl4fs7HvsQRbz01iSZ0waepz90R","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":160},"rootRelativePath":"assets/4cac083e-0806-4912-8b94-94afa4fe3992.png"},"b439894e-777b-4395-985b-7a97cd7fae2c":{"name":"sprPlayerRightStill","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":1,"looping":true,"frameDelay":15,"version":"ZTKUIBwFYOBe4_3bxTDx_On9ysenAQCo","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":80},"rootRelativePath":"assets/b439894e-777b-4395-985b-7a97cd7fae2c.png"},"f5967617-2644-4404-8bb7-e790764719bf":{"name":"sprPlayerUp","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"_O65TOrMPmlcXoL74.hAMCbc869m_MF7","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":160},"rootRelativePath":"assets/f5967617-2644-4404-8bb7-e790764719bf.png"},"b6c27c88-701d-44b6-8019-1e2d26ed53f8":{"name":"sprPlayerUpStill","sourceUrl":null,"frameSize":{"x":58,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"6WYOZI9XCgdzR2km8vU.NNIDefwZWtyO","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":77},"rootRelativePath":"assets/b6c27c88-701d-44b6-8019-1e2d26ed53f8.png"},"9674a946-79d8-45e8-bf2d-7f25da7ef2b7":{"name":"sprBlack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"o5KOGcdQ1U5D53hfOlWj8bhf1Sv9Ahz3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9674a946-79d8-45e8-bf2d-7f25da7ef2b7.png"},"02c1817f-b183-4ab6-be69-2cc77e0980bf":{"name":"sprSpawn","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":43,"looping":true,"frameDelay":20,"version":"6hSx8v5_94E33JuYAQmqdytB6v9OkV0u","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":560},"rootRelativePath":"assets/02c1817f-b183-4ab6-be69-2cc77e0980bf.png"},"bd3b4d94-a34f-478a-992d-c464c1e8382c":{"name":"sprMenuOrb","sourceUrl":null,"frameSize":{"x":90,"y":96},"frameCount":4,"looping":true,"frameDelay":12,"version":"FS3ID03iMT6zrckjxlcQss4OmD6Kp9CL","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":192},"rootRelativePath":"assets/bd3b4d94-a34f-478a-992d-c464c1e8382c.png"},"29432fa5-bd2d-4608-8d8f-a11236428ffa":{"name":"sprBoulder","sourceUrl":null,"frameSize":{"x":107,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"rayvtmraroPvBY4OUdt5oPLA_Qy77ZX5","loadedFromSource":true,"saved":true,"sourceSize":{"x":107,"y":93},"rootRelativePath":"assets/29432fa5-bd2d-4608-8d8f-a11236428ffa.png"},"c8a5333e-2922-4324-b104-fda5e0c3cb4c":{"name":"sprBird","sourceUrl":null,"frameSize":{"x":30,"y":20},"frameCount":4,"looping":true,"frameDelay":12,"version":"ac_swj9hE41mtql3XlZEa9.vh9sPAItF","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":40},"rootRelativePath":"assets/c8a5333e-2922-4324-b104-fda5e0c3cb4c.png"},"07212802-0860-4351-91eb-165285777ee7":{"name":"sprForest","sourceUrl":null,"frameSize":{"x":512,"y":128},"frameCount":2,"looping":true,"frameDelay":60,"version":"6GzBi4yUgV6pWD.lKFSMq3l70uS9QCbJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":256},"rootRelativePath":"assets/07212802-0860-4351-91eb-165285777ee7.png"},"d2f8c35b-19ed-478a-a37e-3ed6887b0813":{"name":"sprControls","sourceUrl":null,"frameSize":{"x":88,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"2xfrNIMyqsBIj3OF31mHxs8hDOydjKfN","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":58},"rootRelativePath":"assets/d2f8c35b-19ed-478a-a37e-3ed6887b0813.png"},"70a5ce72-9fc3-4545-a6de-8ffd4591a172":{"name":"sprAttackDown","sourceUrl":null,"frameSize":{"x":64,"y":86},"frameCount":11,"looping":true,"frameDelay":4,"version":"aYznWB4VWMTejTVuJmGJydEpwPKtjx6h","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":258},"rootRelativePath":"assets/70a5ce72-9fc3-4545-a6de-8ffd4591a172.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/// Default Values
World.frameRate = 60;
visibility = false;
color = rgb(20, 110, 20);
/// Intro
black = createSprite (200, 200);
black.setAnimation("sprBlack");
black.scale = 4;
playSound("assets/bird.mp3");
// First Scene
setTimeout(function() {
  black.destroy();
  // Forest
  forest = createSprite (160, 60);
  forest.setAnimation("sprForest");
  // Song
  playSound("assets/frostfall.mp3");
  // Spawn
  spawn = createSprite(200, 200);
  spawn.setAnimation("sprSpawn");
}, 8000);
// Player Initiation
setTimeout(function() {
  spawn.destroy();
  visibility = true;
  controls = createSprite(330, 350);
  controls.setAnimation("sprControls");
  setTimeout(function() {
    controls.destroy();
  }, 8000);
}, 21600);
/// Player
sprite = createSprite(192, 200);
sprite.setAnimation("sprPlayerRightStill");
function draw() {
  sprite.visible = visibility;
  background(color);
  // Player Movement
  // Movement
  // Up
  if (keyWentDown("w")) {
    sprite.velocityY = -1;
    sprite.setAnimation("sprPlayerUp");
  } else if (keyWentUp("w")) {
    sprite.velocityY = 0;
    sprite.setAnimation("sprPlayerUpStill");
  }
  // Down
  if (keyWentDown("s")) {
    sprite.velocityY = 1;
    sprite.setAnimation("sprPlayerDown");
  } else if (keyWentUp("s")) {
    sprite.velocityY = 0;
    sprite.setAnimation("sprPlayerDownStill");
  }
  // Left
  if (keyWentDown("a")) {
    sprite.velocityX = -1;
    sprite.setAnimation("sprPlayerLeft");
  } else if (keyWentUp("a")) {
    sprite.velocityX = 0;
    sprite.setAnimation("sprPlayerLeftStill");
  }
  // Right
  if (keyWentDown("d")) {
    sprite.velocityX = 1;
    sprite.setAnimation("sprPlayerRight");
  } else if (keyWentUp("d")) {
    sprite.velocityX = 0;
    sprite.setAnimation("sprPlayerRightStill");
  }
  /// Diaganol
  if (keyWentDown("w") && keyDown("a")) {
    sprite.setAnimation("sprPlayerUp");
  }
  if (keyWentDown("a") && keyDown("s")) {
    sprite.setAnimation("sprPlayerDown");
  }
  /// Attack (Dash)
  // Up
  if (keyWentDown("space") && keyDown("w")) {
    setTimeout(function() {
      sprite.velocityY = 0;
    }, 550);
  }
  // Left
  if (keyWentDown("space") && keyDown("a")) {
    setTimeout(function() {
      sprite.velocityX = 0;
    }, 550);
  }
  // Down
  if (keyWentDown("space") && keyDown("s")) {
    sprite.setAnimation("sprAttackDown");
    setTimeout(function() {
      sprite.velocityY = 0;
    }, 550);
  }
  // Right
  if (keyWentDown("space") && keyDown("d")) {
    setTimeout(function() {
      sprite.velocityX = 0;
    }, 550);
  }
  /// Collision Detection
  // X
  if (sprite.x < 25) {
    sprite.x = 25;
    sprite.setAnimation("sprPlayerLeftStill");
  }
  if (sprite.x > 375) {
    sprite.x = 375;
    sprite.setAnimation("sprPlayerRightStill");
  }
  // Y
  if (sprite.y > 375) {
    sprite.y = 375;
    sprite.setAnimation("sprPlayerDownStill");
  }
  if (sprite.y < 162) {
    sprite.y = 162;
    sprite.setAnimation("sprPlayerUpStill");
  }
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
