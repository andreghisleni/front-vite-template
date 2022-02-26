import React from 'react';
import { toast } from 'react-toastify';
import Table from '@components/Table';

// import { Container } from './styles';

export const Default: React.FC = () => {
  const data = [
    {
      id: 'ewtgyrtu657yu65unr6',
      name: 'Melissa Sueli Josefa da Luz',
      email: 'melissa_daluz@uel.br',
      phone: '(62) 3621-2899',
    },
    {
      id: '34654763vhrtdexwqfers',
      name: 'Joaquim Nelson Jesus',
      email: 'joaquim-jesus96@nipbr.com',
      phone: '(85) 3915-7614',
    },
    {
      id: 'kio7yvgty7yudtfettyyy',
      name: 'Rodrigo Fábio Raul da Costa',
      email: 'rodrigo-dacosta91@simsvale.com.br',
      phone: '(61) 3967-1423',
    },
    {
      id: 'ujhtftgrtumyutygueftyrfyjiyhgr',
      name: 'Igor Daniel Kauê Silveira',
      email: 'igordanielsilveira@sistectecnologia.com.br',
      phone: '(68) 2984-6926',
    },
    {
      id: 'yjyjuthyuthyjujytthyy',
      name: 'Eduardo Ryan Fernandes',
      email: 'eduardo.ryan.fernandes@fazergourmet.com.br',
      phone: '(65) 2768-5602',
    },
    {
      id: 'yyhjujyytytyyyytty',
      name: 'Nelson César da Paz',
      email: 'nelson_dapaz@cheryamur.com.br',
      phone: '(81) 2967-3802',
    },
    {
      id: 'yuyyugyyyyujyhthtyhyttty',
      name: 'Sabrina Malu Cecília Araújo',
      email: 'sabrina.malu.araujo@tuds.com.br',
      phone: '(62) 2960-7916',
    },
    {
      id: 'ytyuyutvrtyjkmuytbvty',
      name: 'Márcio Oliver Aparício',
      email: 'marciooliveraparicio@freitas.net.br',
      phone: '(11) 2630-3974',
    },
    {
      id: 'e5wyvg54ue65gj45hvcte',
      name: 'Gustavo Henry Elias Assis',
      email: 'gustavohenryassis@grupogil.com.br',
      phone: '(91) 3879-9871',
    },
    {
      id: '344ftyc45u6jc6jk75rv7j456',
      name: 'Sérgio Anderson Ricardo Teixeira',
      email: 'sergio_teixeira@ggm.com.br',
      phone: '(83) 3811-1276',
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '100px',
      }}
    >
      <h1>Pagina de exemplo</h1>
      <Table
        title="Table Example"
        itemLabel={[
          { name: [{ label: 'Nome', name: ['name'] }] },
          {
            name: [
              { label: 'Telefone', name: ['phone'] },
              { label: 'E-mail', name: ['email'] },
            ],
          },
          { name: [{ label: '', name: [''] }], operator: true, width: 200 },
        ]}
        buttons={{
          delete: (id: string) => {
            toast.success(`Deletado com sucesso! [${id}]`);
          },
          edit: (id: string) => {
            toast.success(`Editado com sucesso! [${id}]`);
          },
        }}
        keyTable="id"
        data={[]}
        addFunction={() => {
          toast.success(`Adicionado com sucesso!`);
        }}
      />

      <Table
        style={{ marginTop: '20px', marginBottom: '40px' }}
        title="Table Example"
        itemLabel={[
          { name: [{ label: 'Nome', name: ['name'] }] },
          {
            name: [
              { label: 'Telefone', name: ['phone'] },
              { label: 'E-mail', name: ['email'] },
            ],
          },
          { name: [{ label: '', name: [''] }], operator: true, width: 200 },
        ]}
        buttons={{
          delete: (id: string) => {
            toast.success(`Deletado com sucesso! [${id}]`);
          },
          edit: (id: string) => {
            toast.success(`Editado com sucesso! [${id}]`);
          },
        }}
        keyTable="id"
        data={[...data]}
        addFunction={() => {
          toast.success(`Adicionado com sucesso!`);
        }}
      />
    </div>
  );
};
