import Swal from 'sweetalert2';

export const alertQuestion = (title='', subtitle= '', icon= 'question') => {
    return Swal.fire(
        title,
        subtitle,
        icon
      )
}