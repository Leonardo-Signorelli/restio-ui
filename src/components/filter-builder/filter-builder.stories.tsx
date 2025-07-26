import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterBuilder } from "./filter-builder";
import type { FilterGroup, FieldOption } from "./filter-builder-types";

// Componente wrapper per gestire lo stato nelle stories
const FilterBuilderWrapper = ({
  initialFilters,
  fieldOptions,
  onChange,
}: {
  readonly initialFilters: FilterGroup;
  readonly fieldOptions: FieldOption[];
  readonly onChange?: (filters: FilterGroup) => void;
}) => {
  const [filters, setFilters] = useState<FilterGroup>(initialFilters);

  const handleChange = (newFilters: FilterGroup) => {
    setFilters(newFilters);
    onChange?.(newFilters);
  };

  return <FilterBuilder filters={filters} onChange={handleChange} fieldOptions={fieldOptions} ref={null} />;
};

const defaultFieldOptions: FieldOption[] = [
  { value: "Collaboratore", type: "string" },
  { value: "Data", type: "date" },
  { value: "Età", type: "number" },
];

const meta: Meta<typeof FilterBuilderWrapper> = {
  title: "FunctionalComponent/FilterBuilder",
  component: FilterBuilderWrapper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Il FilterBuilder è un componente per costruire filtri complessi con supporto per:
- Filtri singoli con campo, operatore e valore
- Gruppi di filtri con logica AND/OR
- Annidamento di gruppi
- Diversi tipi di dati (string, number, date)

Il componente è completamente controllato e richiede:
- \`filters\`: Lo stato corrente dei filtri
- \`onChange\`: Callback per gestire i cambiamenti
- \`fieldOptions\`: Array delle colonne disponibili per i filtri
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    fieldOptions: {
      description: "Array delle opzioni di campo disponibili per i filtri",
      control: { type: "object" },
    },
    onChange: {
      action: "filters-changed",
      description: "Callback chiamata quando i filtri cambiano",
    },
    initialFilters: {
      description: "Stato iniziale dei filtri",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Storia con un filtro singolo preimpostato
export const WithSingleFilter: Story = {
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "and",
      filters: [
        {
          field: {
            value: "Collaboratore",
            type: "string",
          },
          columnsType: "string",
          operator: {
            value: "",
          },
          value: "Mario",
        },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Esempio con un singolo filtro preimpostato per il campo Collaboratore.",
      },
    },
  },
};

// Storia con logica OR
export const WithOrLogic: Story = {
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "or",
      filters: [
        {
          field: {
            value: "Collaboratore",
            type: "string",
          },
          columnsType: "string",
          operator: {
            value: "",
          },
          value: "Mario Rossi",
        },
        {
          field: {
            value: "Collaboratore",
            type: "string",
          },
          columnsType: "string",
          operator: {
            value: "Uguale a",
          },
          value: "Luigi Verdi",
        },
      ],
    },
  },
};

// Storia con gruppi annidati
export const WithNestedGroups: Story = {
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "and",
      filters: [
        {
          field: {
            value: "Data",
            type: "date",
          },
          columnsType: "date",
          operator: {
            value: "Dopo",
          },
          value: "2024-01-01",
        },
        {
          logic: "or",
          filters: [
            {
              field: {
                value: "Collaboratore",
                type: "string",
              },
              columnsType: "string",
              operator: {
                value: "Contiene",
              },
              value: "Mario",
            },
            {
              logic: "and",
              filters: [
                {
                  field: {
                    value: "Età",
                    type: "number",
                  },
                  columnsType: "number",
                  operator: {
                    value: "Maggiore di",
                  },
                  value: 30,
                },
                {
                  field: {
                    value: "Collaboratore",
                    type: "string",
                  },
                  columnsType: "string",
                  operator: {
                    value: "Contiene",
                  },
                  value: "Luigi",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

// Storia per testare tutti i tipi di campo
export const AllFieldTypes: Story = {
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "and",
      filters: [
        {
          field: {
            value: "Collaboratore",
            type: "string",
          },
          columnsType: "string",
          operator: {
            value: "Inizia con",
          },
          value: "Mario",
        },
        {
          field: {
            value: "Età",
            type: "number",
          },
          columnsType: "number",
          operator: {
            value: "Uguale a",
          },
          value: 35,
        },
        {
          field: {
            value: "Data",
            type: "date",
          },
          columnsType: "date",
          operator: {
            value: "Il giorno",
          },
          value: "2024-12-25",
        },
      ],
    },
  },
};
