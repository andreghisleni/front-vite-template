import dot from 'dot-object';
import React from 'react';
import { IconType } from 'react-icons';
import { MdAddCircle } from 'react-icons/md';
import { v4 as uuid } from 'uuid';

import { ItemData } from './components/ItemData';
import { Container, Th, TableContainer, Thead, Tr, Tbody } from './styles';

export interface IItenLabelProps {
  name: { label: string; name: string[] | string }[];
  width?: number;
  type?: 'button';
  operator?: boolean;
  other?: boolean;
}
export interface ButtonProos {
  icon?: (data: any) => IconType;
  func: (id: string, data?: any) => void;
  label?: string;
  color?: 'black' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'purple';
  disabled?: (data: any) => boolean;
  // | string;
}
export interface TableProps {
  title: string;
  itemLabel: IItenLabelProps[];
  keyTable: string;
  buttons?: {
    edit?: (id: string, data?: any) => void;
    delete?: (id: string) => void;
    others?: {
      [key: string]: ButtonProos;
    };
  };
  // type?: {
  //   [key: string]: 'string' | 'number' | 'image';
  // };
  data:
    | {
        [key: string]: string | number | TableProps['data'];
      }[]
    | Object[];
  addFunction?: () => void;
}
export const Table: React.FC<TableProps> = ({
  itemLabel,
  data,
  title,
  addFunction,
  buttons,
  keyTable,
}) => {
  return (
    <Container>
      <header>
        <h1>{title}</h1>

        {addFunction && (
          <button type="button" onClick={() => addFunction()}>
            <MdAddCircle />
            Adicionar
          </button>
        )}
        {!addFunction && <div />}
      </header>
      <div>
        <TableContainer>
          <Thead>
            <Tr>
              {itemLabel.filter(i => i.other).length > 0 && <Th width={50} />}
              {itemLabel
                .filter(i => !i.other)
                .map(l => (
                  <Th key={`${l.name}+${uuid()}`} width={l.width}>
                    {l.name.length === 1 && <p>{l.name[0].label}</p>}
                    {l.name.length !== 1 &&
                      l.name.map(({ label }) => <p key={label}>{label}</p>)}
                  </Th>
                ))}
            </Tr>
          </Thead>

          <Tbody>
            {data.map(d => (
              <ItemData
                key={`${dot.pick(keyTable, d)}`}
                data={d}
                itemLabel={itemLabel}
                keyTable={keyTable}
                buttons={buttons}
              />
            ))}
          </Tbody>
        </TableContainer>
      </div>
    </Container>
  );
};
