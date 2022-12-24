import dot from 'dot-object';
import React, { useCallback, useMemo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { v4 as uuid } from 'uuid';

import { IItenLabelProps, TableProps } from '../..';
import { ButtonContent, CollapsableContainer, Td, Tr } from '../../styles';
import { Button } from '../Button';
import { GenericButton } from '../GenericButton';

interface IItemDataProps {
  itemLabel: IItenLabelProps[];
  keyTable: TableProps['keyTable'];
  buttons?: TableProps['buttons'];
  data:
    | {
        [key: string]: string | number | TableProps['data'];
      }[]
    | Object;
}

export const ItemData: React.FC<IItemDataProps> = ({
  itemLabel,
  keyTable,
  data: d,
  buttons,
}) => {
  const haveOther = useMemo(() => {
    return itemLabel.filter(i => i.other).length > 0;
  }, [itemLabel]);

  const [otherOpened, setOtherOpened] = useState(false);

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const handleOpenOther = useCallback(() => {
    setOtherOpened(otherOpenedData => !otherOpenedData);
  }, []);

  return (
    <>
      <Tr
        haveOtherOpened={otherOpened}
        isHovering={hover2}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleOpenOther}
      >
        {haveOther && (
          <Td>{otherOpened ? <IoIosArrowUp /> : <IoIosArrowDown />}</Td>
        )}

        {itemLabel
          .filter(i => !i.other)
          .map(i => (
            <Td key={`${i.name}+${uuid()}`}>
              {/* just text */}
              {!i.operator && !i.other && i.name.length === 1 && (
                <p data-label={i.name[0].label}>
                  {dot.pick(String(i.name[0].name), d)}
                </p>
              )}
              {!i.operator && !i.other && i.name.length !== 1 && (
                <div>
                  {i.name.map(({ name, label }) => (
                    <p
                      key={`${dot.pick(String(name), d).toString()}+${uuid()}`}
                      data-label={label}
                    >
                      {dot.pick(String(name), d)}
                    </p>
                  ))}
                </div>
              )}

              {/* just operations */}

              {i.operator && buttons && (
                <ButtonContent>
                  {buttons.edit && (
                    <Button
                      type="edit"
                      id={dot.pick(keyTable, d)}
                      data={d}
                      func={buttons.edit}
                    />
                  )}
                  {buttons.delete && (
                    <Button
                      type="delete"
                      id={dot.pick(keyTable, d)}
                      data={d}
                      func={buttons.delete}
                    />
                  )}

                  {i.name[0].name instanceof Array &&
                    i.name[0].name.map(
                      n =>
                        buttons &&
                        buttons.others &&
                        buttons.others[n] && (
                          <GenericButton
                            key={`${n}+${uuid()}`}
                            func={buttons.others[n].func}
                            icon={buttons.others[n].icon}
                            label={buttons.others[n].label}
                            color={buttons.others[n].color}
                            disabled={buttons.others[n].disabled}
                            id={`${dot.pick(keyTable, d)}`}
                            data={d}
                          />
                        ),
                    )}
                </ButtonContent>
              )}
              {/* just another buttons */}
              {i.type === 'button' &&
                buttons &&
                buttons.others &&
                buttons.others[i.name[0].name[0]] && (
                  <ButtonContent>
                    <GenericButton
                      func={buttons.others[i.name[0].name[0]].func}
                      icon={buttons.others[i.name[0].name[0]].icon}
                      label={buttons.others[i.name[0].name[0]].label}
                      color={buttons.others[i.name[0].name[0]].color}
                      disabled={buttons.others[i.name[0].name[0]].disabled}
                      id={`${dot.pick(keyTable, d)}`}
                      data={d}
                    />
                  </ButtonContent>
                )}
            </Td>
          ))}
      </Tr>
      {haveOther && (
        <CollapsableContainer
          isOpened={otherOpened}
          isHovering={hover}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <td colSpan={itemLabel.filter(i => !i.other).length + 1}>
            <div>
              {itemLabel
                .filter(i => i.other)
                .map(
                  i =>
                    i.name.length === 1 && (
                      <div key={`${i.name}+${uuid()}`}>
                        <span>{i.name[0].label}</span>
                        <p>{dot.pick(String(i.name[0].name), d)}</p>
                      </div>
                    ),
                )}
            </div>
          </td>
        </CollapsableContainer>
      )}
    </>
  );
};
