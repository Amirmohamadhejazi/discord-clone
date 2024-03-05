import { type FC } from 'react'
import { Modal, type ModalProps } from '@mantine/core'

const DModal: FC<ModalProps> = ({ children, classNames, opened, ...rest }) => {
    return (
        <>
            <Modal
                classNames={{ ...classNames, root: 'w-full', body: 'p-0    ' }}
                size={'lg'}
                opened={opened}
                // onClose={close}
                withCloseButton={false}
                centered
                {...rest}
            >
                {children}
            </Modal>
        </>
    )
}

export default DModal
