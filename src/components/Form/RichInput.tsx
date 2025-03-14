import JoditEditor from 'jodit-react';

export function RichInput() {
  return (
    <JoditEditor
      value={''}
      config={{ readonly: false }}
      onChange={(newContent) => {}}
    />
  );
}
