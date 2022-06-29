export const handleRun = () => {
  const target = document.querySelectorAll('.showBattle');
  const stage = document.getElementById('stage');

  if (stage) {
    stage.className = 'showStage';
  }

  const list = Array.from(target);

  list.forEach((element) => {
    element?.classList.toggle('showBattle');
    element?.classList.toggle('hideBattle');
  });
};

export const handleStartBattle = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const target = document.getElementById('stage');
  if (target) {
    target.className = 'hideStage';
  }

  const battleElements = document.querySelectorAll('.hideBattle');
  const list = Array.from(battleElements);

  list.forEach((element) => {
    element?.classList.toggle('hideBattle');
    element?.classList.toggle('showBattle');
  });
};
