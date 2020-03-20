using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.Models.Enums.Main;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("Invoices",Schema="dbo")]
    public partial class Invoice
    {
		#region InvoiceId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion InvoiceId Annotations

        public int InvoiceId { get; set; }

		#region InvoiceNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion InvoiceNumber Annotations

        public int InvoiceNumber { get; set; }


        public Nullable<int> UserId { get; set; }


        public Nullable<int> BookingId { get; set; }


        public Invoice()
        {
        }
	}
}