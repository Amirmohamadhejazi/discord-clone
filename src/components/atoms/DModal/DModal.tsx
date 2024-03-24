import { type FC } from 'react'
import { Modal, type ModalProps } from '@mantine/core'

const DModal: FC<ModalProps> = ({ children, classNames, size = 'lg', opened, ...rest }) => {
    return (
        <>
            <Modal
                classNames={{ ...classNames, root: 'w-full', body: 'p-0', content: 'bg-transparent' }}
                size={size}
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
