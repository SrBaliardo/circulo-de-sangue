import * as S from './styles';
import { ShinyText } from '../../components';
import { tagsMenu } from './tags-menu';

export function Menu() {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <S.Container>
      <S.MenuItens>
        {/* <S.MenuLink href="/">Home</S.MenuLink> */}
        {tagsMenu.map((item) => {
          const isContact = item.label === 'O CÍRCULO';

          return (
            <S.MenuLink
              key={item.id}
              $isContact={isContact}
              onClick={() => handleClick(item.id)}
            >
              {item.label === 'O CÍRCULO' ? (
                <ShinyText
                  text="O CÍRCULO"
                  disabled={false}
                  speed={3.5}
                  className="custom-class menu-link"
                />
              ) : (
                item.label
              )}
            </S.MenuLink>
          );
        })}
      </S.MenuItens>
    </S.Container>
  );
}
