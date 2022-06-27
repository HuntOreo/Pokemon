export const handleRun = () => {
  const target = document.querySelectorAll('.showBattle');
  const battleButton = document.querySelector('.battleButton');

  if (battleButton) {
    battleButton.className += ' showBattleButton';
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
  const target = event.target as Element;

  target.classList.remove('showBattleButton');

  const battleElements = document.querySelectorAll('.hideBattle');
  const list = Array.from(battleElements);

  list.forEach((element) => {
    element?.classList.toggle('hideBattle');
    element?.classList.toggle('showBattle');
  });
};
