import Phaser from 'phaser'

export const createCharacterAnims = (anims: Phaser.Animations.AnimationManager) => {
  const animsFrameRate = 15
  var charMale = 'male'
  var charFemale = 'lucy'
  var charDr = 'ash'
  var charAdmin = 'admin'

  anims.create({
    key: 'admin_idle_right',
    frames: anims.generateFrameNames(charAdmin, {
      start: 0,
      end: 5,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'admin_idle_up',
    frames: anims.generateFrameNames(charAdmin, {
      start: 6,
      end: 11,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'admin_idle_left',
    frames: anims.generateFrameNames(charAdmin, {
      start: 12,
      end: 17,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'admin_idle_down',
    frames: anims.generateFrameNames(charAdmin, {
      start: 18,
      end: 23,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'admin_run_right',
    frames: anims.generateFrameNames(charAdmin, {
      start: 24,
      end: 29,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_run_up',
    frames: anims.generateFrameNames(charAdmin, {
      start: 30,
      end: 35,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_run_left',
    frames: anims.generateFrameNames(charAdmin, {
      start: 36,
      end: 41,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_run_down',
    frames: anims.generateFrameNames(charAdmin, {
      start: 42,
      end: 47,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_sit_down',
    frames: anims.generateFrameNames(charAdmin, {
      start: 48,
      end: 48,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_sit_left',
    frames: anims.generateFrameNames(charAdmin, {
      start: 49,
      end: 49,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_sit_right',
    frames: anims.generateFrameNames(charAdmin, {
      start: 50,
      end: 50,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'admin_sit_up',
    frames: anims.generateFrameNames(charAdmin, {
      start: 51,
      end: 51,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_idle_right',
    frames: anims.generateFrameNames(charFemale, {
      start: 0,
      end: 5,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'lucy_idle_up',
    frames: anims.generateFrameNames(charFemale, {
      start: 6,
      end: 11,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'lucy_idle_left',
    frames: anims.generateFrameNames(charFemale, {
      start: 12,
      end: 17,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'lucy_idle_down',
    frames: anims.generateFrameNames(charFemale, {
      start: 18,
      end: 23,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'lucy_run_right',
    frames: anims.generateFrameNames(charFemale, {
      start: 24,
      end: 29,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_run_up',
    frames: anims.generateFrameNames(charFemale, {
      start: 30,
      end: 35,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_run_left',
    frames: anims.generateFrameNames(charFemale, {
      start: 36,
      end: 41,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_run_down',
    frames: anims.generateFrameNames(charFemale, {
      start: 42,
      end: 47,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_sit_down',
    frames: anims.generateFrameNames(charFemale, {
      start: 48,
      end: 48,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_sit_left',
    frames: anims.generateFrameNames(charFemale, {
      start: 49,
      end: 49,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_sit_right',
    frames: anims.generateFrameNames(charFemale, {
      start: 50,
      end: 50,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'lucy_sit_up',
    frames: anims.generateFrameNames(charFemale, {
      start: 51,
      end: 51,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_idle_right',
    frames: anims.generateFrameNames(charDr, {
      start: 0,
      end: 5,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'ash_idle_up',
    frames: anims.generateFrameNames(charDr, {
      start: 6,
      end: 11,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'ash_idle_left',
    frames: anims.generateFrameNames(charDr, {
      start: 12,
      end: 17,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'ash_idle_down',
    frames: anims.generateFrameNames(charDr, {
      start: 18,
      end: 23,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'ash_run_right',
    frames: anims.generateFrameNames(charDr, {
      start: 24,
      end: 29,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_run_up',
    frames: anims.generateFrameNames(charDr, {
      start: 30,
      end: 35,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_run_left',
    frames: anims.generateFrameNames(charDr, {
      start: 36,
      end: 41,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_run_down',
    frames: anims.generateFrameNames(charDr, {
      start: 42,
      end: 47,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_sit_down',
    frames: anims.generateFrameNames(charDr, {
      start: 48,
      end: 48,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_sit_left',
    frames: anims.generateFrameNames(charDr, {
      start: 49,
      end: 49,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_sit_right',
    frames: anims.generateFrameNames(charDr, {
      start: 50,
      end: 50,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'ash_sit_up',
    frames: anims.generateFrameNames(charDr, {
      start: 51,
      end: 51,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_idle_right',
    frames: anims.generateFrameNames(charMale, {
      start: 0,
      end: 5,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'male_idle_up',
    frames: anims.generateFrameNames(charMale, {
      start: 6,
      end: 11,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'male_idle_left',
    frames: anims.generateFrameNames(charMale, {
      start: 12,
      end: 17,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'male_idle_down',
    frames: anims.generateFrameNames(charMale, {
      start: 18,
      end: 23,
    }),
    repeat: -1,
    frameRate: animsFrameRate * 0.6,
  })

  anims.create({
    key: 'male_run_right',
    frames: anims.generateFrameNames(charMale, {
      start: 24,
      end: 29,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_run_up',
    frames: anims.generateFrameNames(charMale, {
      start: 30,
      end: 35,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_run_left',
    frames: anims.generateFrameNames(charMale, {
      start: 36,
      end: 41,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_run_down',
    frames: anims.generateFrameNames(charMale, {
      start: 42,
      end: 47,
    }),
    repeat: -1,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_sit_down',
    frames: anims.generateFrameNames(charMale, {
      start: 48,
      end: 48,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_sit_left',
    frames: anims.generateFrameNames(charMale, {
      start: 49,
      end: 49,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_sit_right',
    frames: anims.generateFrameNames(charMale, {
      start: 50,
      end: 50,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })

  anims.create({
    key: 'male_sit_up',
    frames: anims.generateFrameNames(charMale, {
      start: 51,
      end: 51,
    }),
    repeat: 0,
    frameRate: animsFrameRate,
  })
}
