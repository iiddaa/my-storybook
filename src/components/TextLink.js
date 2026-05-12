import './text-link.css';

/**
 * TextLink コンポーネントを生成する。
 *
 * システムを操作せず、画面を遷移したり関連情報を表示したりするためのテキスト要素。
 * ブルー（#318bf7）＋下線で、通常テキストとの差分を明確にする。
 *
 * @param {Object}   props
 * @param {string}   [props.text='テキスト']   - リンクのテキスト
 * @param {string}   [props.href='#']          - リンク先 URL
 * @param {string}   [props.target='_self']    - リンクターゲット（'_self' | '_blank'）
 * @param {Function} [props.onClick=null]      - クリック時のコールバック
 * @returns {HTMLElement}
 */
export const createTextLink = ({
  text = 'テキスト',
  href = '#',
  target = '_self',
  onClick = null,
} = {}) => {
  const link = document.createElement('a');
  link.className = 'storybook-text-link';
  link.href = href;
  link.target = target;
  link.textContent = text;

  if (target === '_blank') {
    link.setAttribute('rel', 'noopener noreferrer');
  }

  if (typeof onClick === 'function') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      onClick(e);
    });
  }

  return link;
};
