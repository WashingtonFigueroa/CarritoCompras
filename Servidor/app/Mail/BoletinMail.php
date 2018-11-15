<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class BoletinMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $envio;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($envio)
    {
        $this->envio = $envio;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.boletin', $this->envio)
            ->from('ventas@frado.ec', 'Frado Store')
            ->to($this->envio['emails'], 'Cliente Frado Store')
            ->subject($this->envio['asunto']);
    }
}
