import React from 'react';

import { MdAddCircle } from 'react-icons/md';
import { IconType } from 'react-icons';

import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';

import { v4 as uuid } from 'uuid';
import { Container, ButtonContent, Th } from './styles';
import Icon from '../Icon';

// interface LabelProps {
//   name: string[];
//   width?: number;
//   operator?: boolean;
// }
// interface ItensProps {
//   name: string[];
//   type?: 'button';
//   operator?: boolean;
// }

interface IItenLabelProps {
  name: { label: string; name: string[] }[];
  width?: number;
  type?: 'button';
  operator?: boolean;
}
interface ButtonProos {
  icon?: IconType;
  func: (id: string, data?: any) => void;
  label?: string;
}
interface TableProps {
  style?: React.CSSProperties;
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
  data: {
    [key: string]: string | number | TableProps['data'];
  }[];
  addFunction?: () => void;
}
const Table: React.FC<TableProps> = ({
  itemLabel,
  data,
  title,
  addFunction,
  buttons,
  keyTable,
  style = {} as React.CSSProperties,
}) => {
  return (
    <Container style={style}>
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
        <table>
          <thead>
            <tr>
              {itemLabel.map(l => (
                <Th key={`${l.name}+${uuid()}`} width={l.width}>
                  {l.name.length === 1 && <p>{l.name[0].label}</p>}
                  {l.name.length !== 1 &&
                    l.name.map(({ label }) => <p key={label}>{label}</p>)}
                </Th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map(d => (
              <tr key={`${d[keyTable]}`}>
                {itemLabel.map(i => (
                  <td key={`${i.name}+${uuid()}`}>
                    {!i.operator && i.name.length === 1 && (
                      <p data-label={i.name[0].label}>{d[i.name[0].name[0]]}</p>
                    )}
                    {!i.operator &&
                      i.name.length !== 1 &&
                      i.name.map(({ name, label }) => (
                        <p key={`${d[name[0]]}+${uuid()}`} data-label={label}>
                          {d[name[0]]}
                        </p>
                      ))}

                    {i.operator && buttons && (
                      <ButtonContent>
                        {buttons.edit && (
                          <button
                            type="button"
                            className="edit"
                            onClick={() => {
                              buttons.edit && buttons.edit(`${d[keyTable]}`, d);
                            }}
                          >
                            <MdModeEdit />
                          </button>
                        )}
                        {buttons.delete && (
                          <button
                            type="button"
                            className="delete"
                            onClick={() => {
                              buttons.delete &&
                                buttons.delete(`${d[keyTable]}`);
                            }}
                          >
                            <MdDeleteSweep />
                          </button>
                        )}

                        {i.name[0].name &&
                          i.name[0].name.map(
                            n =>
                              buttons &&
                              buttons.others &&
                              buttons.others[n] && (
                                <button
                                  key={`${n}+${uuid()}`}
                                  type="button"
                                  className="other"
                                  onClick={() => {
                                    buttons &&
                                      buttons.others &&
                                      buttons.others[n] &&
                                      buttons.others[n].func(
                                        `${d[keyTable]}`,
                                        d,
                                      );
                                  }}
                                >
                                  {buttons.others[n].icon && (
                                    <Icon icon={buttons.others[n].icon} />
                                  )}
                                  {buttons.others[n].label && (
                                    <p>{buttons.others[n].label}</p>
                                  )}
                                </button>
                              ),
                          )}
                      </ButtonContent>
                    )}
                    {i.type === 'button' &&
                      buttons &&
                      buttons.others &&
                      buttons.others[i.name[0].name[0]] && (
                        <ButtonContent>
                          <button
                            type="button"
                            className="other"
                            onClick={() => {
                              buttons &&
                                buttons.others &&
                                buttons.others[i.name[0].name[0]] &&
                                buttons.others[i.name[0].name[0]].func(
                                  `${d[keyTable]}`,
                                  d,
                                );
                            }}
                          >
                            {buttons.others[i.name[0].name[0]].icon && (
                              <Icon
                                icon={buttons.others[i.name[0].name[0]].icon}
                              />
                            )}
                            {buttons.others[i.name[0].name[0]].label && (
                              <p>{buttons.others[i.name[0].name[0]].label}</p>
                            )}
                          </button>
                        </ButtonContent>
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length <= 0 && (
          <h1 className="nothing">Nem um resultado encontrado</h1>
        )}
      </div>
    </Container>
  );
};

export default Table;
