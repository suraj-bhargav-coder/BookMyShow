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
    [Table("Offers",Schema="dbo")]
    public partial class Offer
    {
		#region OfferId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion OfferId Annotations

        public int OfferId { get; set; }

		#region OfferDetail Annotations

        [Required]
        [MaxLength(200)]
		#endregion OfferDetail Annotations

        public string OfferDetail { get; set; }

		#region OfferDiscount Annotations

        [Required]
		#endregion OfferDiscount Annotations

        public decimal OfferDiscount { get; set; }


        public Offer()
        {
        }
	}
}